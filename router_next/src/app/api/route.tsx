export function GET(request: any): any {
    console.log(request);
    return new Response('Hello!');
}

/*
    export function POST(request: any): any {
        console.log(request);
    }
*/
