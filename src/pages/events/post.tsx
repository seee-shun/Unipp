import type { NextPage } from "next"
import type { Events } from "types/app/events"

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
  InputRightAddon,
  RequiredIndicator,
} from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const Post: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Events>({ mode: "onBlur", defaultValues: { host: "your.name" } })
  function onSubmit(values: any) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }
  const watchExplain = watch("explain", "")

  const [hostIsFocus, setHostIsFocus] = useState(false)

  // useEffect(() => {
  //   const subscription = watch((value) => {
  //     console.log(value.explain?.length)
  //     console.log(watchExplain)
  //   })
  //   return () => subscription.unsubscribe()
  // }, [watch])

  const placeHolder: Events = {
    type: "雑談会",
    title: "Unipp雑談会",
    explain: "みんなで雑談でもしませんか？",
    image: "https:google.com",
    host: "user default: you",
    capacity: 10,
    relatedLinks: "https://google.com",
    entryCost: 1000,
    period: {
      start: new Date(233434234234),
      finish: new Date(233434234234),
    },
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
            px={{ base: "1rem", lg: "10rem" }}
            spacing={4}
            divider={<StackDivider borderColor="gray.200" />}
          >
            {/* イベントタイプは選択式にしたほうがいいのかもしれない */}
            <FormControl isInvalid={!!errors.type}>
              <FormLabel htmlFor="type">イベントタイプ</FormLabel>
              <Input
                id="type"
                variant="outline"
                placeholder={placeHolder.type}
                {...register("type", {
                  required: { value: true, message: "イベントタイプの入力をお願いします" },
                  maxLength: { value: 15, message: "15文字以下の入力をお願いします" },
                })}
              />
              <FormErrorMessage>
                {errors.type && errorMessageWrapper(`${errors.type.message}`)}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.title}>
              {/* イベント名は完全にstringでいい 文字制限はどうしようかな*/}
              <FormLabel htmlFor="title">イベント名</FormLabel>
              <Input
                id="title"
                variant="outline"
                placeholder={placeHolder.title}
                {...register("title", {
                  required: { value: true, message: "イベント名の入力をお願いします" },
                })}
              />
              <FormErrorMessage>
                {errors.title && errorMessageWrapper(`${errors.title.message}`)}
              </FormErrorMessage>
            </FormControl>

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

            {/* <FormControl >I have to make Image components</FormControl> */}

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
                {...register("host", {
                  required: true,
                })}
              />
              <FormHelperText>
                <Text color={hostIsFocus === true ? "red" : "inherit"}>
                  自動的にあなたになります
                </Text>
              </FormHelperText>
            </FormControl>

            <FormControl isInvalid={!!errors.capacity}>
              <FormLabel>定員</FormLabel>
              <InputGroup>
                <Input
                  id="capacity"
                  type="number"
                  inputmode="numeric"
                  variant="outline"
                  placeholder={placeHolder.explain}
                  {...register("capacity", {
                    required: { value: true, message: "定員を入力してください" },
                    pattern: {
                      value: RegExp(/^([a-zA-Z0-9]{0,10})$/),
                      message: "10文字以内の半角数字を入力してください",
                    },
                  })}
                />
                <InputRightAddon children="人" />
              </InputGroup>
              <FormHelperText>
                <b>10文字以内</b>の<b>半角数字</b>を入力してください
              </FormHelperText>
              <FormErrorMessage>
                {errors.capacity && errorMessageWrapper(`${errors.capacity.message}`)}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.relatedLinks}>
              {/* オンラインかオフラインかを聞く？でも両方という可能性もある */}
              <FormLabel>開催場所</FormLabel>
              <InputGroup>
                <Input
                  id="relatidLinks"
                  variant="outline"
                  placeholder={placeHolder.explain}
                  {...register("relatedLinks", {
                    required: { value: true, message: "開催場所を入力して下さい" },
                  })}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.relatedLinks && errorMessageWrapper(`${errors.relatedLinks.message}`)}
              </FormErrorMessage>
            </FormControl>

            <FormControl>
              {/* need to fix placeholder */}
              <FormLabel>参加費</FormLabel>
              <Input id="entryCost" variant="outline" placeholder="00" {...register("entryCost")} />
            </FormControl>

            <FormControl>
              {/* need to fix placeholder */}
              <FormLabel>開催時間</FormLabel>
              <Input
                id="entryCost"
                variant="outline"
                placeholder={`${placeHolder.period.start}`}
                {...register("period")}
              />
            </FormControl>

            <Button type="submit">投稿する</Button>
          </VStack>
        </form>
      </main>
    </>
  )
}

export default Post
