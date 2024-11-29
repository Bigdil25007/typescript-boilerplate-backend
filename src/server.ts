import http, { IncomingMessage, ServerResponse } from "http";

const PORT: number = Number(process.env.PORT) || 3000;

// Création du serveur HTTP
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  // Définir l'en-tête de réponse
  res.writeHead(200, { "Content-Type": "application/json" });

  // Exemple de réponse JSON
  res.end(
    JSON.stringify({
      message: "Bienvenue sur le serveur backend minimaliste !",
      status: "success",
    })
  );
});

// Démarrage du serveur
server.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
