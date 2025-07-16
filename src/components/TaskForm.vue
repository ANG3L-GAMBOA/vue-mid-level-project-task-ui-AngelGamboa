<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label>Descripcion:</label>
      <input v-model="form.descripcion" class="input" />
      <p v-if="!$v.form.descripcion.required">Campo requeido</p>
    </div>
    <div>
      <label>Estado entrega</label>
      <select v-model="form.estado" class="input">
        <option value="pendiente">Pendiente</option>
        <option value="en progreso">en progreso</option>
        <option value="hecho">hecho</option>
      </select>
    </div>
    <div>
      <label>Prioridad:</label>
      <select v-model="form.prioridad" class="input">
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>
    </div>
    <button type="submit" class="btn">Guardar</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useTaskStore } from "@/store/task";

const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["saved"]);
const store = useTaskStore();
const form = reactive({
  descripcion: "",
  estado: "pendiente",
  prioridad: "baja",
  projectId: props.projectId,
});
const rules = {
  descripcion: { required },
};
const $v = useVuelidate(rules, form);
const handleSubmit = async () => {
  $v.value.$touch();
  if ($v.value.$invalid) return;
  await store.createTask(form);
  emit("saved");
};
</script>
