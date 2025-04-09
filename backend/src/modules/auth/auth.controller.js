import * as AuthService from "./auth.service.js";

export async function signup(req, res) {
  try {
    const user = await AuthService.signup(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to sign up" });
  }
}

export async function login(req, res) {
  try {
    const token = await AuthService.login(req.body);
    res.json({ token });
  } catch (error) {
    if (error.message === "Invalid Credentials") {
      res.status(401).json({ error: error.message });
    }
  }
}
