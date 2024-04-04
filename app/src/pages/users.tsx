import { Container, Stack, Title } from "@mantine/core";
import { COLORS } from "settings/app";

export function UsersPage() {
  return (
    <Container w={"100%"}>
      <Stack>
        <Title c={COLORS.black}>Users Page</Title>
      </Stack>
    </Container>
  );
}
