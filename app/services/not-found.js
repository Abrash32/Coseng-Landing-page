export async function metadata({ params }) {
  return {
    title: "Page Not Found - Coseng",
    description: "The page or resource you are looking for is not available.",
  };
}
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>The page or resource you are looking for is not available.</p>
    </div>
  );
}
