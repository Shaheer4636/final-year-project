<template>

  <div class="grid-container">

    <!-- Sidebar -->

    <div class="sidebar grid-item">

      <AdminSideBar />

    </div>

    

    <!-- Main Content -->

    <div class="grid-item main-content">

      <div class="task-list">

        <div class="toolbar">

          <h1 class="toolbar-header">Tasks</h1>

          <div class="toolbar-buttons">

            <button class="toolbar-button" @click="addTask">Add Task</button>

            <button class="toolbar-button" @click="refresh">Refresh</button>

            <button class="toolbar-button" @click="exportToPdf">Export to PDF</button>

            <button class="toolbar-button" @click="exportToXlsx">Export to Excel</button>

          </div>

        </div>

        <div class="footer">

          <input class="search-input" type="text" placeholder="Task Search" v-model="searchQuery">

        </div>

        <div class="content">

          <table class="task-table">

            <thead>

              <tr>

                <th>Task Name</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              <tr v-for="task in filteredTasks" :key="task.id">

                <td>{{ task.name }}</td>

                <td>

                  <button class="remove-button" @click="removeTask(task.id)">Remove</button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  </div>

</template>



<script>

import { saveAs } from 'file-saver';

import jsPDF from 'jspdf';

import autoTable from 'jspdf-autotable';

import * as XLSX from 'xlsx';

import AdminSideBar from "@/components/AdminDashboardComponents/AdminSideBar.vue";



export default {

  components: {

    AdminSideBar,

  },

  data() {

    return {

      tasks: [],

      searchQuery: ''

    };

  },

  computed: {

    filteredTasks() {

      return this.tasks.filter(task => task.name.toLowerCase().includes(this.searchQuery.toLowerCase()));

    }

  },

  methods: {

    addTask() {

      const taskName = prompt('Enter task name:');

      if (taskName) {

        const newTask = { id: Date.now(), name: taskName };

        this.tasks.push(newTask);

        this.saveTasksToCookies();

      }

    },

    removeTask(taskId) {

      this.tasks = this.tasks.filter(task => task.id !== taskId);

      this.saveTasksToCookies();

    },

    refresh() {

      this.loadTasksFromCookies();

    },

    exportToPdf() {

      const doc = new jsPDF();

      autoTable(doc, { html: '.task-table' });

      doc.save('tasks.pdf');

    },

    exportToXlsx() {

      const worksheet = XLSX.utils.json_to_sheet(this.tasks);

      const workbook = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(workbook, worksheet, 'Tasks');

      XLSX.writeFile(workbook, 'tasks.xlsx');

    },

    saveTasksToCookies() {

      document.cookie = `tasks=${JSON.stringify(this.tasks)}; path=/; max-age=31536000`;

    },

    loadTasksFromCookies() {

      const cookies = document.cookie.split('; ');

      const taskCookie = cookies.find(cookie => cookie.startsWith('tasks='));

      if (taskCookie) {

        this.tasks = JSON.parse(taskCookie.split('=')[1]);

      }

    }

  },

  mounted() {

    this.loadTasksFromCookies();

  }

};

</script>



<style scoped>

.grid-container {

  display: grid;

  grid-template-columns: 250px 1fr; /* Sidebar and main content side by side */

  gap: 0; /* No gap between sidebar and main content */

  height: 100vh;

  background: #000000;

}



.grid-item {

  padding: 20px;

}



.sidebar {

  background-color: #000000; /* Ensure the sidebar is completely black */

  border-right: 2px solid #ffffff; /* White line separator */

}



.main-content {

  display: flex;

  flex-direction: column;

  justify-content: flex-start; /* Align items to the top */

  align-items: center;

  background-color: #ffffff;

  color: #000000;

  padding-top: 20px; /* Add padding to the top */

}



.task-list {

  margin: 20px auto;

  max-width: 800px;

  width: 100%;

}



.toolbar {

  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 20px;

}



.toolbar-header {

  font-size: 24px;

  margin: 0;

}



.toolbar-buttons {

  display: flex;

}



.toolbar-button {

  margin-right: 10px;

  padding: 8px 16px;

  background-color: #007bff;

  color: white;

  border: none;

  border-radius: 4px;

  cursor: pointer;

}



.footer {

  margin-bottom: 20px;

  width: 100%;

}



.search-input {

  padding: 8px 16px;

  width: 100%;

  border: 1px solid #ccc;

  border-radius: 4px;

}



.content {

  margin-bottom: 20px;

  width: 100%;

}



.task-table {

  width: 100%;

  border-collapse: collapse;

  margin: 0 auto;

  border-radius: 10px;

  overflow: hidden;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

}



.task-table th,

.task-table td {

  padding: 12px 15px;

  text-align: left;

}



.task-table thead {

  background-color: #007bff;

  color: white;

}



.task-table tr:nth-child(even) {

  background-color: #f2f2f2;

}



.task-table tr:nth-child(odd) {

  background-color: #ffffff;

}



.task-table tr:hover {

  background-color: #ddd;

}



.remove-button {

  padding: 6px 12px;

  background-color: #dc3545;

  color: white;

  border: none;

  border-radius: 4px;

  cursor: pointer;

}



th {

  color: #050505;

  font-weight: bolder;

}

</style>