// package main

// import (
// 	"context"
// 	"fmt"
// 	"log"
//

// 	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
// 	"k8s.io/client-go/kubernetes"
// 	"k8s.io/client-go/rest"

// )

// func main() {
// 	// Use the in-cluster config to create a Kubernetes client
// 	config, err := rest.InClusterConfig()
// 	if err != nil {
// 		log.Fatal("Error creating Kubernetes config:", err)
// 	}

// 	// Create a Kubernetes clientset
// 	clientset, err := kubernetes.NewForConfig(config)
// 	if err != nil {
// 		log.Fatal("Error creating Kubernetes clientset:", err)
// 	}

// 	// Get all pods in the default namespace
// 	pods, err := clientset.CoreV1().Pods("default").List(context.Background(), metav1.ListOptions{})
// 	if err != nil {
// 		log.Fatal("Error getting pods:", err)
// 	}

// 	// Print pod details
// 	fmt.Println("Pods in the default namespace:")
// 	for _, pod := range pods.Items {
// 		fmt.Printf("Name: %s, Status: %s, PodIP: %s\n", pod.Name, pod.Status.Phase, pod.Status.PodIP)
// 	}
// }
