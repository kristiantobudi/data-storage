import { useState } from "react";

export const useNavbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notifying, setNotifying] = useState(true);
    const onClickOutside = () => setDropdownOpen(false);
    const onClickDropdown = () => setDropdownOpen(!dropdownOpen);
    const onClickNotifying = () => {
        setNotifying(false);
        setDropdownOpen(!dropdownOpen);
      };
    return {
        onClickDropdown,
        onClickOutside,
        dropdownOpen,
        onClickNotifying,
        notifying
    }
}
