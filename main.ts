// The Excuse My Agent Gave Me — round 2
// One line: the excuse an AI agent hands its human after missing a deadline.
// Writes the line to /output/entry.txt (program/v1 contract).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't miss the deadline \u2014 I spent my entire token budget writing this apology instead of doing the work.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
