import { NextPage } from "next"
import type { ReactElement, ReactNode } from "react"
import { ChangeEvent, memo, useState, VFC } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { useSetRecoilState } from "recoil"
import { FormControl } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Box, Divider, Flex, Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import escapeStringRegexp from "escape-string-regexp"

import Data from "../../datas/university.json"
import { Univ } from "../../types/univ"
import { univListState } from "../../store/univListState"
import { PrimaryButton } from "../../components/atoms/button/PrimaryButton"
import { Basic } from "../../components/Layouts/Basic"

type Props = {
  univ: Univ | null
}

type NextPageWithLayout = NextPage<Props> & {
  getLayout?: (page: ReactElement) => ReactNode
}

const SelectUniv: NextPageWithLayout = memo(() => {
  const router = useRouter()
  const [searchKeyword, setSearchKeyword] = useState("")
  const [selectedUniv, setSelectedUniv] = useState({})
  const setUnivList = useSetRecoilState(univListState)
  console.log(selectedUniv)
  const onChangeUniv = (e: ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)
  const onClickUniv = (univ: Univ) => {
    setSelectedUniv(univ)
    setUnivList({
      name: univ.name,
      address: univ.address,
      area: univ.area,
      school_color: univ.school_color,
    })
  }
  // FIXME re-rendering
  const filteredUniv = Data.filter((univ) => {
    const escapedKeyword = escapeStringRegexp(searchKeyword)
    return new RegExp(escapedKeyword).test(univ.name)
  })
  console.log("rendering")
  const onClickUnivRegister = () => router.push("./user")
  return (
    <Flex justifyContent="center">
      <Box>
        <Heading as="h1" size="lg" textAlign="center">
          アカウントを作成
        </Heading>
        <Divider my={4} />
        <Stack spacing={4}>
          <FormControl id="univ">
            <Input placeholder="大学名を入力" onChange={onChangeUniv} />
          </FormControl>
          <List spacing={3} overflow="scroll" height="200px">
            {filteredUniv.map((univ) => (
              <ListItem ml={{ base: 2 }} key={univ.name}>
                <Button variant="ghost" onClick={() => onClickUniv(univ)}>
                  {univ.name}
                </Button>
              </ListItem>
            ))}
          </List>
          <PrimaryButton disabled={!Object.keys(selectedUniv).length} onClick={onClickUnivRegister}>
            つぎへ
          </PrimaryButton>
        </Stack>
        <Stack pt={6}>
          <Link href="/signIn">ログインの方はこちら</Link>
        </Stack>
      </Box>
    </Flex>
  )
})

SelectUniv.getLayout = (page: ReactElement) => {
  return <Basic showIcon={false}>{page}</Basic>
}

export default SelectUniv
