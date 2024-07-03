import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="apple">Programming</SelectItem>
          <SelectItem value="banana">Design</SelectItem>
          <SelectItem value="blueberry">Business</SelectItem>
          <SelectItem value="grapes">Personal developemnt</SelectItem>
          <SelectItem value="pineapple">Fitness</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
