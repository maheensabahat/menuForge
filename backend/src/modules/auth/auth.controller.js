import * as AuthService from "./auth.service.js";

export async function signup(req, res) {
  const user = await AuthService.signup(req.body);
  res.status(201).json(user);
}

export async function login(req, res) {
  const token = await AuthService.login(req.body);
  res.json({ token });
}
