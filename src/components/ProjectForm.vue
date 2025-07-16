<template>
  <form @submit.prevent="handleSumbit" class="space-y-4">
    <div>
      <label> Nombre: </label>
      <input v-model="form.name" type="text" class="input" />
      <p v-if="!$v.form.nombre.required">Nombre reuqrido</p>
    </div>
    <div>
      <label>Estado:</label>
      <select v-model="form.estado" class="input">
        <option value="active">Activo</option>
        <option value="inactive">Inactivo</option>
      </select>
    </div>
    <button type="submit" class="btn">Guardar</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";

const emit = definirEmits(["saved"]);
const store = useProjectStore();
const form = reactive({
  name: "",
  estado: "active",
});
const rules = {
  name: { required: true },
};
const $v = useVuelidate(rules, form);

const handleSumbit = async () => {
  $v.value.$touch();
  if ($v.value.$invalid) return;
  await store.createProject(form);
  emit("saved");
};
</script>
