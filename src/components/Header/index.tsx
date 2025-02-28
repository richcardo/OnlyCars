import { Avatar } from "../Avatar"
import { IconButton } from "../Button"
import { SearchBar } from "../SearchBar"
import { Select } from "../Select"
import { StyledHeader } from "./styled"
import { Image } from "../Image"

export const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <Image
          size="large"
          imgUrl="src\assets\Screenshot 2025-02-28 145533.png"
        />
        <SearchBar className="searchBar" />
      </div>
      <div className="user">
        <IconButton
          icon="bell"
          color="muted"
          onClick={() => console.log("ciao")}
          iconSize="2x"
        />
        <IconButton
          icon="gear"
          color="muted"
          onClick={() => console.log("ciao")}
          iconSize="2x"
        />
        <div className="avatar">
          {" "}
          <Avatar imgUrl="src\assets\download.jpeg" />
          <Select
            id={"user"}
            options={[
              { id: "1", name: "uibulbul " },
              { id: "2", name: "user 2 " },
            ]}
            onChange={(v) => console.log(v)}
          />
        </div>
      </div>
    </StyledHeader>
  )
}
