import React from "react";
import { Card, CardBody } from "reactstrap";

const Header=()=>
{
    return(
        <div>
        <Card className="my-5 bg-info ">
        <CardBody>
        <h1 className="text-center my-7">ADMIN USAGE ONLY</h1>
        </CardBody>
        </Card>
        
        </div>
    )
}

export default Header;