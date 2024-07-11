export function GET() {
    return new Response(JSON.stringify({ msg: "helo" }), {
        headers: { "Content-Type": "application/json" },
    });
}
