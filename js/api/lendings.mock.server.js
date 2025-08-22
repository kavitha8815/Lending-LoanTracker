import {
  createServer,
  Model,
} from "https://cdn.jsdelivr.net/npm/miragejs@0.1.48/+esm";

export default function lendingAPIs() {
  // Create a Mirage server

  createServer({
    models: {
      lending: Model,
    },

    seeds(server) {
      server.create("lending", {
        id: 1,
        who: "Tanvi Priya",
        type: "Money",
        details: "$1000",
        when: "2024-10-01",
      });
      server.create("lending", {
        id: 2,
        who: "Akanksha Choudhary",
        type: "Book",
        details: "Essentialism",
        when: "2024-10-02",
      });
      server.create("lending", {
        id: 3,
        who: "Tanay Pratap",
        type: "Electronics",
        details: "Charger",
        when: "2024-10-03",
      });
    },

    routes() {
      this.namespace = "/api";

      this.get("/lendings", (schema) => {
        return schema.lendings.all();
      });

      this.post("/lendings", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.lendings.create(attrs);
      });

      this.get("/lendings/:id", (schema, request) => {
        const id = request.params.id;
        return schema.lendings.find(id);
      });

      this.put("/lendings/:id", (schema, request) => {
        const id = request.params.id;
        const attrs = JSON.parse(request.requestBody);
        return schema.lendings.find(id).update(attrs);
      });

      this.delete("/lendings/:id", (schema, request) => {
        const id = request.params.id;
        return schema.lendings.find(id).destroy();
      });
    },
  });
}
