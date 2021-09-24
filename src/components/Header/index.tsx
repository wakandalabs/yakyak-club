import {
  Button,
  Grid,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'
import {useHistory} from "react-router-dom";
import {useState} from "react";
import {HamburgerIcon} from "@chakra-ui/icons";

export const Header = () => {
  const links = [
    {path: "/wallet", label: "Wallet"},
    {path: "/swap", label: "Swap"},
  ]
  const history = useHistory()
  const [currentPath, setCurrentPath] = useState(history.location.pathname)
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Grid templateColumns="repeat(3, 1fr)" p={4} gap={6} alignItems={"center"}>
      <Stack justifySelf={"flex-start"}>
        <Text fontWeight={"bold"} fontSize={"md"}>Create React Dapp</Text>
      </Stack>
      <Stack justifySelf={"center"} direction={"row"} p={1} borderRadius={"md"}>
        {links.map((link, index) => (
          <Button key={index} colorScheme={"gray"} size={"md"} variant={currentPath === link.path ? "solid" : "ghost"}
                  onClick={() => {
                    history.push(link.path)
                    setCurrentPath(link.path)
                  }}>{link.label}</Button>
        ))}
      </Stack>
      <Stack justifySelf={"flex-end"} direction={"row"} alignItems={"center"}>
        <Button size={"md"}>Address</Button>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon/>}
          />
          <MenuList>
            <MenuItem>
              About
            </MenuItem>
            <MenuItem>
              Document
            </MenuItem>
            <MenuItem>
              Language
            </MenuItem>
            <MenuItem onClick={toggleColorMode}>
              {colorMode === "light" ? "Dark" : "Light"} Mode
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Grid>
  )
}

export default Header