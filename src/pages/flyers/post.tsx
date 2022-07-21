import type { NextPage } from "next"

import Head from "next/head"
import { useForm, SubmitHandler } from "react-hook-form"
import {
  InputGroup,
  Input,
  Textarea,
  VStack,
  StackDivider,
  Button,
  Flex,
  Spacer,
  Text,
  Box,
  Image,
  InputRightAddon,
  RequiredIndicator,
} from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react"
import { ReactElement, ReactNode, useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { userState } from "store/userState"
import { OnlyBack } from "components/Layouts/OnlyBack"
import { firestore } from "lib/firebase"
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore"
import { useRouter } from "next/router"

type Flyer = {
  title: string
  contact: string
  explain: string
  flyerImageURL: string
  posterId: string
  target: string
}
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Post: NextPageWithLayout = () => {
  const router = useRouter()
  const user = useRecoilValue(userState)
  // const flyerUrl =
  //   "https://firebasestorage.googleapis.com/v0/b/unipp-develop.appspot.com/o/flyer_sample.jpg?alt=media&token=978590da-2ecb-4c99-a70f-debdadc9450d"
  // // const flyerUrl =
  // //   "https://firebasestorage.googleapis.com/v0/b/unipp-develop.appspot.com/o/flyer-test2.jpeg?alt=media&token=1bc69bbd-cbba-4f45-b779-061c349a025a"
  // const flyerUrl =
  //   "https://firebasestorage.googleapis.com/v0/b/unipp-develop.appspot.com/o/flyer3.jpeg?alt=media&token=70a19b50-daff-4875-b7c6-6446930b5a29"
  const flyerUrl =
    "https://firebasestorage.googleapis.com/v0/b/unipp-develop.appspot.com/o/yama.jpeg?alt=media&token=4d31d52b-4766-487b-97a9-b636eb877d79"
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Flyer>({ mode: "onBlur", defaultValues: { posterId: user.name } })

  const onSubmit = async (values: any) => {
    const flyerRef = collection(firestore, "flyers")
    await addDoc(flyerRef, {
      target: values.target,
      title: values.title,
      imageURL: flyerUrl,
      createdAt: Timestamp.now(),
      posterId: values.posterId,
      views: 0,
    })
      .then((docRef) => {
        setDoc(doc(firestore, "flyers", docRef.id, "details", "details"), {
          explain: values.explain,
          contacts: values.contact,
        })
        setDoc(doc(firestore, "flyers", docRef.id, "details", "viewer"), { ids: [] })
      })
      .finally(() => {
        router.push("/flyers")
      })
  }
  const watchExplain = watch("explain", "")

  const [hostIsFocus, setHostIsFocus] = useState(false)

  const placeHolder: Flyer = {
    target: "新入生",
    title: "サッカー部来ませんか？",
    explain: "Unipp大学公式のサッカー部に入りませんか？",
    flyerImageURL: "https:google.com",
    posterId: "user default: you",
    contact: "uniuni@unipp.com",
  }

  const errorMessageWrapper = (errorMessage: string) => {
    return <>&#128583; {errorMessage}</>
  }

  return (
    <>
      <Head>
        <title>Unipp:Event投稿</title>
        <meta name="description" content="page for to post Event" />
      </Head>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack
            align="stretch"
            justifyContent={"center"}
            px={{ base: "1rem", lg: "10rem" }}
            spacing={4}
            mb={10}
            divider={<StackDivider borderColor="gray.200" />}
          >
            {/* ここに画像の投稿フォームを追加する */}
            <Box display={"flex"} justifyContent={"center"}>
              <Image
                src={flyerUrl}
                layout={"responsive"}
                width={300}
                height={400}
                borderRadius={10}
                alt="flyer-sumple"
              ></Image>
            </Box>
            {/* イベントタイプは選択式にしたほうがいいのかもしれない */}
            <FormControl isInvalid={!!errors.target}>
              <FormLabel htmlFor="target">チラシ対象者</FormLabel>
              <Input
                id="target"
                variant="outline"
                placeholder={placeHolder.target}
                {...register("target", {
                  required: { value: true, message: "チラシ対象者の入力をお願いします" },
                  maxLength: { value: 15, message: "15文字以下の入力をお願いします" },
                })}
              />
              <FormErrorMessage>{errors.target && errorMessageWrapper(`${errors.target.message}`)}</FormErrorMessage>
            </FormControl>
            /////////
            <FormControl isInvalid={!!errors.title}>
              {/* チラシ名は完全にstringでいい 文字制限はどうしようかな*/}
              <FormLabel htmlFor="title">チラシ名</FormLabel>
              <Input
                id="title"
                variant="outline"
                placeholder={placeHolder.title}
                {...register("title", {
                  required: { value: true, message: "イベント名の入力をお願いします" },
                })}
              />
              <FormErrorMessage>{errors.title && errorMessageWrapper(`${errors.title.message}`)}</FormErrorMessage>
            </FormControl>
            //
            <FormControl isInvalid={!!errors.explain}>
              {/* 説明は完全にtext　文字数の上限などは必要かもしれない */}
              <FormLabel htmlFor="explain">説明</FormLabel>
              <Textarea
                id="explain"
                variant="outline"
                placeholder={placeHolder.explain}
                {...register("explain", {
                  required: { value: true, message: "イベントの説明の記入をお願いします!" },
                  maxLength: { value: 300, message: "300文字以内での記入をお願いします!" },
                })}
              />
              <Flex alignItems={"end"}>
                <FormErrorMessage>
                  {errors.explain && errorMessageWrapper(`${errors.explain.message}`)}
                </FormErrorMessage>
                <Spacer />
                <Text fontSize={{ base: "sm" }} color={watchExplain.length > 300 ? "red" : ""}>
                  {watchExplain.length}
                </Text>
                <Text fontSize={{ base: "xs" }} pl="4px">
                  / 300
                </Text>
              </Flex>
            </FormControl>
            //
            <FormControl
              onFocus={() => {
                setHostIsFocus(true)
              }}
              onBlur={() => {
                setHostIsFocus(false)
              }}
            >
              <FormLabel>主催者</FormLabel>
              <Input
                isReadOnly
                id="host"
                _focus={{
                  backgroundColor: "gray.300",
                }}
                variant={"filled"}
                {...register("posterId", {
                  required: true,
                })}
              />
              <FormHelperText>
                <Text color={hostIsFocus === true ? "red" : "inherit"}>自動的にあなたになります</Text>
              </FormHelperText>
            </FormControl>
            <FormControl isInvalid={!!errors.contact}>
              <FormLabel htmlFor="contact">連絡先</FormLabel>
              <Input
                id="contact"
                variant="outline"
                placeholder={placeHolder.contact}
                {...register("contact", {
                  required: { value: true, message: "連絡先の入力をお願いします" },
                  maxLength: { value: 50, message: "50文字以下の入力をお願いします" },
                })}
              />
              <FormErrorMessage>{errors.contact && errorMessageWrapper(`${errors.contact.message}`)}</FormErrorMessage>
            </FormControl>
            <Button type="submit">投稿する</Button>
          </VStack>
        </form>
      </main>
    </>
  )
}
Post.getLayout = (page: ReactElement) => {
  return <OnlyBack>{page}</OnlyBack>
}

export default Post
