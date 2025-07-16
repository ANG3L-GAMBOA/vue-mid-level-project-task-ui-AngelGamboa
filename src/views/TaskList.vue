<template>
  <div class="p-4">
    <h1 class="text-xl font-bold">Tareas de proyecto{{ projectId }}</h1>
    <TaskForm
      :projectId="projectId"
      @saved="() => store.fetchTasks(projectId)"
    />
    <table
      :headers="['ID', 'Nombre', 'Estado']"
      :keys="['id', 'nombre', 'estado']"
      :items="filteredTasks"
    />
  </div>
</template>
<script setup>
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useTaskStore } from "@/store/task";
import Table from "@/components/Table.vue";
import TaskForm from "@/components/TaskForm.vue";

const route = useRoute();
const prohjectId = route.params.id;
const store = useTaskStore();
const filtroEstado = ref("");
const filtroPrioridad = ref("");

onMounted(() => store.fetchTasks(projectId));

const filteredTasks = computed(() => {
  return store.tasks.filter(
    (t) =>
      (!filtroNombre.value || p.nombre.includes(filtroNombre.value)) &&
      (!filtroEstado.value || p.estado === filtroEstado.value)
  );
});
</script>
