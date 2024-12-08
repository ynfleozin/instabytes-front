// Função para buscar os dados do endpoint
export default async function fetchImages() {
  try {
    const response = await fetch("https://instabytes-api-66028862719.southamerica-east1.run.app/posts"); 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
