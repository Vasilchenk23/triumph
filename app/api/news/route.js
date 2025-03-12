import { query } from "../../lib/db";

export async function GET() {
  try {
    const news = await query('SELECT * FROM news ORDER BY date DESC');
    return new Response(JSON.stringify(news), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
