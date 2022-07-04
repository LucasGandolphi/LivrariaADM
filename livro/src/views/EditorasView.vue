<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      editoras: [
        {
          id: "c11556b2-18d2-48d7-ac95-df6d0431f3e6",
          nome: "Editora1",
          site: "site.com",
        },
        {
          id: "0204d8f7-52a5-463b-9d6f-3cf6d5ecffe9",
          nome: "Editora2",
          site: "site.com",
        },
        {
          id: "2148db23-7480-40d7-9cea-ae5876b01886",
          nome: "Editora3",
          site: "site.com",
        },
      ],
      novo_nome: "",
      novo_site: "",
    };
  },
  methods: {
    salvar() {
      if ((this.novo_nome, this.novo_site !== "")) {
        const novo_id = uuidv4();
        this.editoras.push({
          id: novo_id,
          nome: this.novo_nome,
          site: this.novo_site,
        });
        this.novo_nome = "";
        this.novo_site = "";
      }
    },
    excluir(editora) {
      const indice = this.editoras.indexOf(editora);
      this.editoras.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Cadastro de Editora</h2>
      </div>
      <div class="form-input">
        <input type="text" placeholder="Nome" v-model="novo_nome" />
        <input type="text" placeholder="Site" v-model="novo_site" />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-edit">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Site</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="editora in editoras" :key="editora.id">
              <td>{{ editora.id }}</td>
              <td>{{ editora.nome }}</td>
              <td>{{ editora.site }}</td>
              <button @click="excluir(editora)">Excluir</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style>
.title {
  text-align: center;
  margin: 2rem 0;
}

.form-input {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.form-input input {
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.form-input button {
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 10px;
  background-color: rgb(53, 25, 2);
  color: #fff;
  font-weight: bold;
  margin-left: 1%;
}

.list-times {
  display: flex;
  justify-content: center;
}

table {
  width: 50%;
  border-radius: 6px;
  margin: 0 auto;
  border: 1px solid #000;
  font-size: 1.1rem;
}

table thead {
  background-color: rgb(53, 25, 2);
  color: #fff;
}

table thead th {
  font-weight: bolder;
}

table tbody tr:nth-child(odd) {
  background-color: #ccc;
}
</style>
