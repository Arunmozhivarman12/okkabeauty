export async function GET() {
    const res = await fetch("https://okkabeauty.com/wp-json/wp/v2/pages");
const data = await res.json();
return Response.json({data});
    
}

