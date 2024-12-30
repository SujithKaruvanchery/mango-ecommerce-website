const AdminDB = require("../models/adminModel");
const ProductDB = require("../models/productModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");

const registerAdmin = async (req, res) => {
    try {
        const { name, email, mobile, password, role } = req.body;
        if (!name || !email || !mobile || !password || !role) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const adminAlreadyExistWithEmail = await AdminDB.findOne({ email });

        if (adminAlreadyExistWithEmail) {
            return res.status(400).json({ error: "Admin with this email already exists" });
        }

        const adminAlreadyExistWithMobile = await AdminDB.findOne({ mobile });

        if (adminAlreadyExistWithMobile) {
            return res.status(400).json({ error: "Admin with this mobile number already exists" });
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword);

        const newAdmin = new AdminDB({
            name, email, password: hashedPassword, mobile, role
        });

        const savedAdmin = await newAdmin.save();
        res.status(200).json({ message: "Admin created successfully", data: savedAdmin });

    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
    }
};

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const admin = await AdminDB.findOne({ email });
        console.log(admin, "=======Admin Data");

        if (!admin) {
            return res.status(400).json({ error: "Admin does not exist" });
        }

        const passwordMatch = await bcrypt.compare(password, admin.password);
        console.log(passwordMatch, "========Password Match");

        if (!passwordMatch) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        if (!admin.isActive) {
            return res.status(400).json({ error: "Admin profile is deactivated" });
        }

        const token = generateToken(admin, "admin");
        console.log(token, "=======Token");

        res.cookie("admin_token", token);

        res.status(200).json({ message: "Login successful", data: admin });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};

const adminProfile = async (req, res) => {
    try {
        const adminId = req.user.id;
        const adminData = await AdminDB.findById(adminId).select("-password");
        res.status(200).json({ message: "Admin profile fetched", data: adminData });
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
    }
};

const logoutAdmin = async (req, res) => {
    try {
        res.clearCookie("admin_token");

        res.status(200).json({ message: "Admin logged out successfully" });
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
    }
};

const checkAdmin = async (req, res) => {
    try {
        res.status(200).json({ message: "Authorized Admin" });
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
    }
};

const updateAdminProfile = async (req, res) => {
    try {
        const adminId = req.user.id;
        console.log(adminId, "=======Admin ID");
        const { name, email, mobile, role } = req.body;

        if (!name && !email && !mobile && !role) {
            return res.status(400).json({ error: "At least one field is required to update" });
        }

        if (email) {
            const existingAdminWithEmail = await AdminDB.findOne({ email });
            if (existingAdminWithEmail && existingAdminWithEmail.id !== adminId) {
                return res.status(400).json({ error: "Email already in use by another user" });
            }
        }

        if (mobile) {
            const existingAdminWithMobile = await AdminDB.findOne({ mobile });
            if (existingAdminWithMobile && existingAdminWithMobile.id !== adminId) {
                return res.status(400).json({ error: "Mobile number already in use by another user" });
            }
        }

        const admin = await AdminDB.findById(adminId);

        if (!admin) {
            return res.status(404).json({ error: "Admin not found" });
        }

        Object.assign(admin, { name, email, mobile, role });
        console.log({ name, email, mobile, role }, "=======Admin Updates");

        await admin.save();

        const updatedAdmin = await AdminDB.findById(adminId).select("-password");

        res.status(200).json({ message: "User profile updated successfully", data: updatedAdmin });
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
    }
};

module.exports = { registerAdmin, loginAdmin, logoutAdmin, checkAdmin, adminProfile, updateAdminProfile };


// const getProduct = async (req, res) => {
//     try {
//         const products = await ProductDB.find()
//         res.status(200).json(products)
//     } catch (error) {
//         console.log(error);
//         res.status(error.status || 500).json({ error: error.message || "Internal server Error" });
//     }
// }

// const getProductById = async (req, res) => {
//     try {
//         const productId = req.params.id
//         const product = await ProductDB.findById(productId)
//         if (!product) {
//             return res.status(404).json({ message: "Product not found" })
//         }
//         res.status(200).json(product)
//     } catch (error) {
//         console.log(error);
//         res.status(error.status || 500).json({ error: error.message || "Internal server Error" });
//     }
// }

// const createProduct = async (req, res) => {
//     try {
//         const createProduct = new ProductDB(req.body)
//         const savedProduct = await createProduct.save()
//         if (!savedProduct) {
//             return res.status(404).json({ message: "Product not found" })
//         }
//         res.status(201).json({ message: 'Product created successfully', data: savedProduct });
//     } catch (error) {
//         console.log(error);
//         res.status(error.status || 500).json({ error: error.message || "Internal server Error" });
//     }
// }

// const updateProduct = async (req, res) => {
//     try {
//         const productId = req.params.id
//         const updatedProduct = await ProductDB.findByIdAndUpdate(productId, req.body)
//         if (!updatedProduct) {
//             return res.status(404).json({ message: "Product not find" })
//         }
//         res.status(200).json({ message: 'Product updated successfully', data: updatedProduct });
//     } catch (error) {
//         console.log(error);
//         res.status(error.status || 500).json({ error: error.message || "Internal server Error" });
//     }
// }

// const deleteProduct = async (req, res) => {
//     try {
//         const productId = req.params.id
//         const deletedProduct = await ProductDB.findByIdAndDelete(productId)
//         if (!deletedProduct) {
//             return res.status(404).json({ message: "Product not find" })
//         }
//         res.status(200).json({ message: 'Product deleted successfully', data: deletedProduct });
//     } catch (error) {
//         console.log(error);
//         res.status(error.status || 500).json({ error: error.message || "Internal server Error" });
//     }
// }

// module.exports = { getProduct, getProductById, createProduct, deleteProduct, updateProduct, registerAdmin, loginAdmin }
