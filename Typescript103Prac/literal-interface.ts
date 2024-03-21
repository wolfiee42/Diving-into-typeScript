declare function handleRequest(url: string, method: "GET" | "POST"): void;


const req = { url: "https://something.com", method: "GET" };
// handleRequest(req.url, req.method "GET"); // cz, typescript things it is an error
handleRequest(req.url, req.method as "GET"); // correct

