import { useQuery } from "@tanstack/react-query";
import { usersApi } from "features/users/services/users.api";

class UserApiHooks {
    useUsers = (query: any) => {
        return useQuery({
            queryKey: ["fetchUsers", query],
            queryFn:  () => usersApi.getMany(query),
        })
    }
}

export const userHooks = new UserApiHooks();