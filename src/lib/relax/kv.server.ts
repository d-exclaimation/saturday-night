type Command = [string, ...string[]];

export const pipeline = async <T>(commands: Command[]) => {
  const res = await fetch(`${process.env["KV_URL"]}/pipeline`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${process.env["KV_TOKEN"]}`,
    },
    body: JSON.stringify(commands),
  });
  return (await res.json()) as { result: T }[];
};
