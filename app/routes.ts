import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("enrollment", "routes/enrollment.tsx"),
  route("attendance", "routes/attendance.tsx"),
  route("feedback", "routes/feedback.tsx"),
] satisfies RouteConfig;
