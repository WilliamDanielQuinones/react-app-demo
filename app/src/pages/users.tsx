import { Container, Stack, Text, Title } from "@mantine/core";
import { IUser, UsersDropdown, formatName } from "features/users";
import { userHooks } from "features/users/hooks/users.hooks";
import { useState } from "react";
import { COLORS } from "settings/app";

export function UsersPage() {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const { isLoading: loadingUsers, data: users } = userHooks.useUsers({});

  return (
    <Container w={"100%"}>
      <Stack>
        <Title c={COLORS.black}>Users Page</Title>
        <Text>Please select a user to display their information</Text>
        <UsersDropdown
          onUserSelect={(user) => setSelectedUser(user)}
          users={users || []}
          loading={loadingUsers}
        />
        {selectedUser && (
          <Stack mt={"xl"} gap={0}>
            <Text fw={700}>Selected User:</Text>
            <Text pt={"xs"}>{formatName(selectedUser)}</Text>
            {selectedUser.address?.street && (
              <Text>{selectedUser.address.street}</Text>
            )}
            {selectedUser.address?.suite && (
              <Text>{selectedUser.address.suite}</Text>
            )}
            {selectedUser.address?.city && (
              <Text>{selectedUser.address.city}</Text>
            )}
            {selectedUser.address?.zipcode && (
              <Text>{selectedUser.address.zipcode}</Text>
            )}
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
