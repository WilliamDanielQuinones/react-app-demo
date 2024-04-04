import { Text } from "@mantine/core";
import { Autocomplete, TextField } from "@mui/material";
import { IUser, formatName, IUserDropdownOption } from "features/users";

interface Props {
  users?: IUser[];
  onUserSelect: (user: IUser) => void;
  loading?: boolean;
}

export function UsersDropdown({ users, onUserSelect, loading }: Props) {
  if (!users && !loading)
    return (
      <Text>Something went wrong fetch users, please try again later.</Text>
    );

  function renderUserDropdownOptions() {
    return users
      ?.map((u) => {
        let label = formatName(u);

        if (!label) label = u.username ?? u.email;

        return {
          ...u,
          label,
        } as IUserDropdownOption;
      })
      ?.sort((a, b) => a.label.localeCompare(b.label)); //Sort alphabetically by label since last name will always be first
  }

  return (
    <Autocomplete
      loading={loading}
      id="combo-box-demo"
      options={renderUserDropdownOptions() || []}
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, value) => {
        // Function to resolve warning about strict equality
        let label = formatName(option);

        if (!label) label = option.username ?? option.email;

        return label === value.label;
      }}
      renderInput={(params) => <TextField {...params} label="Name" />}
      onChange={(event: any, newValue: IUserDropdownOption | null) => {
        if (onUserSelect) onUserSelect(newValue as IUser);
      }}
    />
  );
}
