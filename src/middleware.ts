// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("auth-token")?.value;

//   // Redirect logged-in users from / (login page) to /dashboard
//   if (token && request.nextUrl.pathname === "/") {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   }

//   // Redirect non-logged-in users from /dashboard to /
//   if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/"],
// };
