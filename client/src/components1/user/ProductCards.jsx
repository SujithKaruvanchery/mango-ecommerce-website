import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function ProductCards({ product }) {
  return (
    <div>
      <Link to={`/product-details/${product._id}`}>
              <Card className="w-90 mb-1 container rounded-none">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="h-96 rounded-none"
                >
                  <img
                    src={product.image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <div className="mb-1 items-center justify-between">
                    <Typography color="blue-gray" className="text-sm">
                      {product.title}
                    </Typography>
                  </div>
                  <div className="items-center justify-between">
                    <Typography color="blue-gray" className="text-sm">
                      Rs.{product.price}
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            </Link>
    </div>
  );
}

export default ProductCards;
