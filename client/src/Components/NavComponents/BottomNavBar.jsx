import  BottomNavButtons  from "./BottomNavButtons";
function BottomNavBar(props) {
    return ( 
        <div className="bottom-nav-bar">
            <BottomNavButtons
                {...props}
            />
        </div>
     );
}

export default BottomNavBar;