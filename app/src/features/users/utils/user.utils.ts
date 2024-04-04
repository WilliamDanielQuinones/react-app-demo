import { IUser } from "features/users/types/users.types";
import nameParser from "parse-full-name";

export function formatName(user?: IUser) {
    if (!user) return '';

    let formattedName = "";

    const parsedName = nameParser.parseFullName(user.name);
    if (parsedName) {
        let tempName = parsedName.last;
        if (parsedName.suffix) {
        tempName += ` ${parsedName.suffix},`;
        } else {
        tempName += ",";
        }

        tempName += ` ${parsedName.first}`;
        if (parsedName.title) tempName += ` (${parsedName.title})`;

        formattedName = tempName ?? "";
    }

    return formattedName;
}
