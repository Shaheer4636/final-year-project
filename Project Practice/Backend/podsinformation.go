package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/rs/cors"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"
)

// PodInfo struct to hold information about a pod
type PodInfo struct {
	Name      string
	Namespace string
	Status    string
}

func main() {
	handler := http.NewServeMux()

	handler.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		kubeconfigPath := `kubeconfig.txt`

		config, err := clientcmd.BuildConfigFromFlags("", kubeconfigPath)
		if err != nil {
			config, err = rest.InClusterConfig()
			if err != nil {
				http.Error(w, fmt.Sprintf("Error building kubeconfig: %v", err), http.StatusInternalServerError)
				return
			}
		}

		clientset, err := kubernetes.NewForConfig(config)
		if err != nil {
			http.Error(w, fmt.Sprintf("Error creating clientset: %v", err), http.StatusInternalServerError)
			return
		}

		pods, err := clientset.CoreV1().Pods("").List(context.TODO(), metav1.ListOptions{})
		if err != nil {
			http.Error(w, fmt.Sprintf("Error fetching pods: %v", err), http.StatusInternalServerError)
			return
		}

		var podInfos []PodInfo
		for _, pod := range pods.Items {
			podInfos = append(podInfos, PodInfo{
				Name:      pod.ObjectMeta.Name,
				Namespace: pod.ObjectMeta.Namespace,
				Status:    string(pod.Status.Phase),
			})
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(podInfos)
	})

	c := cors.AllowAll()

	handlerWithCors := c.Handler(handler)

	log.Fatal(http.ListenAndServe(":8080", handlerWithCors))
}
