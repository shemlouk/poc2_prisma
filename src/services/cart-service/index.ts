import productRepository from "../../repositories/product-repository";
import cartRepository from "../../repositories/cart-repository";
import userRepository from "../../repositories/user-repository";
import errors from "../../errors";

const checkUserId = async (userId: number) => {
  const user = await userRepository.findById(userId);
  if (!user) throw errors.notFoundError("User");
};

const checkIfProductIsInCart = async (userId: number, productId: number) => {
  const cart = await cartRepository.findByUserId(userId);
  if (!cart) throw errors.notFoundError("Cart");
  return cart.products.filter((p) => p.id === productId)[0];
};

const addProductToCart = async (userId: number, productId: number) => {
  await checkUserId(userId);

  const product = await productRepository.findById(productId);

  if (!product) throw errors.notFoundError("Product");
  if (!product.quantity) throw errors.unavailableProductError();

  const isProductInCart = await checkIfProductIsInCart(userId, productId)
    .then((data) => data)
    .catch(() => {});

  if (isProductInCart) throw errors.conflictError("Product");

  const updatedCart = await cartRepository.connectProduct(userId, product);
  await productRepository.updateProductQuantity(productId, -1);

  return updatedCart;
};

const removeProductFromCart = async (userId: number, productId: number) => {
  await checkUserId(userId);

  const product = await checkIfProductIsInCart(userId, productId);
  if (!product) throw errors.notFoundError("Product");

  const updatedCart = await cartRepository.disconnectProduct(userId, product);
  await productRepository.updateProductQuantity(productId, 1);

  return updatedCart;
};

const cartService = { addProductToCart, removeProductFromCart };

export default cartService;
