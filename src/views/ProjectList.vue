<template>
  <div class="p-4">
    <h1 class="text-xl font-bold">Proyectos</h1>
    <ProjectForm @saved="store.fetchProjects" />
    <table
      :headers="['ID', 'Nombre', 'Estado']"
      :keys="['id', 'nombre', 'estado']"
      :items="filteredProjects"
    >
      <template #actions="{ item }">
        <router-link :to="`/projects/${item.id}`" class="btn btn-primary"
          >Ver tareas</router-link
        >
      </template>
    </table>
  </div>
</template>
<script setup>
import { useProjectStore } from "@/store/project";
import ProjectForm from "@/components/ProjectForm.vue";
import Table from "@/components/Table.vue";
import { computed, onMoundted, ref } from "vue";

const store = useProjectStore();
const filtroNombre = ref("");
const filtroEstado = ref("");

onMoundted(() => {
  store.fetchProjects();
});
const filteredProjects = computed(() => {
  (!filtroNombre.value || p.nombre.includes(filtroNombre.value)) &&
    (!filtroEstado.value || p.estado === filtroEstado.value);
});
</script>
