import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";

// Routes 
// import adminRoute from "./src/routes/admin";
import birdRoute from "./src/routes/bird";
import customerRoute from "./src/routes/customer";
import foodRoute from "./src/routes/food";
import gatewayRoute from "./src/routes/gateway";
import healthCareProffesionalRoute from "./src/routes/healthcareproffesional";
import invoiceRoute from "./src/routes/invoice";
import nestRoute from "./src/routes/nest";
import newsRoute from "./src/routes/news";
import orderRoute from "./src/routes/order";
import orderDetailRoute from "./src/routes/orderdetail";
import orderVoucherRoute from "./src/routes/ordervoucher"
import paymentRoute from "./src/routes/payment";
import productRoute from "./src/routes/product";
import productManagerRoute from "./src/routes/productmanager";
import sellerRoute from "./src/routes/seller";
import shipperRoute from "./src/routes/shipper";
import typeOfBirdRoute from "./src/routes/typeofbird";
import voucherRoute from "./src/routes/voucher";
import userRoute from "./src/routes/user";
import authRoutes from "./src/routes/auth";

dotenv.config();
mongoose.connect(process.env.MONGODB_URL as string);

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

//ROUTES
// app.use("/v1/admin", adminRoutes);
app.use("/v1/auth", authRoutes)
app.use("/v1/user", userRoute);
app.use("/v1/bird", birdRoute);
app.use("/v1/customer", customerRoute);
app.use("/v1/food", foodRoute);
app.use("/v1/payment", gatewayRoute)
app.use("/v1/healthcareproffesional", healthCareProffesionalRoute);
app.use("/v1/invoice", invoiceRoute);
app.use("/v1/nest", nestRoute);
app.use("/v1/news", newsRoute);
app.use("/v1/order", orderRoute);
app.use("/v1/orderdetail", orderDetailRoute);
app.use("/v1/ordervoucher", orderVoucherRoute);
app.use("/v1/payment", paymentRoute);
app.use("/v1/product", productRoute);
app.use("/v1/productmanager", productManagerRoute);
app.use("/v1/seller", sellerRoute);
app.use("/v1/shipper", shipperRoute);
app.use("/v1/typeofbird", typeOfBirdRoute);
app.use("/v1/voucher", voucherRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
