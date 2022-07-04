<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      autores: [
        { id: "c11556b2-18d2-48d7-ac95-df6d0431f3e6", nome: "Autor1" },
        { id: "0204d8f7-52a5-463b-9d6f-3cf6d5ecffe9", nome: "Autor2" },
        { id: "2148db23-7480-40d7-9cea-ae5876b01886", nome: "Autor3" },
      ],
      novo_autor: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_autor !== "") {
        const novo_id = uuidv4();
        this.autores.push({
          id: novo_id,
          nome: this.novo_autor,
        });
        this.novo_autor = "";
      }
    },
    excluir(autor) {
      const indice = this.autores.indexOf(autor);
      this.autores.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Autores</h2>
      </div>
      <div class="form-input">
        <input type="text" placeholder="Autor" v-model="novo_autor" />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-aut">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Autor</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="autor in autores" :key="autor.id">
              <td>{{ autor.id }}</td>
              <td>{{ autor.nome }}</td>
              <button @click="excluir(autor)">Excluir</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<style>
main {
  background-color: rgba(146, 146, 146, 0.466);
  border-radius: 30px;
}
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
