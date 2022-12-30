import { Box } from "@chakra-ui/react";

function ProfileImage() {
  return (
    // <div className="card">
    //   <div className="card-body">
    //     <div className="profile-image">
    //       <img src="https://picsum.photos/200/300" alt="profile image" />
    //     </div>
    //   </div>
    // </div>
    <Box>
      <Box size="md" colorScheme="blue">
        <img src="https://picsum.photos/200/300" alt="profile image" />
      </Box>
    </Box>
  );
}

export default ProfileImage;
