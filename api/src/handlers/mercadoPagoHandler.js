const { MercadoPagoConfig, Preference } = require("mercadopago");
const controllerFindAUserByPk = require("../controllers/controllerFindAUserByPk");
require("dotenv").config();
const { ACCESS_TOKEN_MP } = process.env;
const mercadopago = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN_MP });

const mercadoPagoHandlerCheckOut = async (req, res) => {
  console.log("req.userlogin",req.userLoginId);
  const { user, carritoDeCompras } = await controllerFindAUserByPk(
    req.userLoginId
  );
  console.log(user, carritoDeCompras);
  const startDate = new Date();
  const endDate = new Date();
  endDate.setMinutes(endDate.getMinutes() + 15);
  try {
    // Crear un objeto de preferencia
    const preference = new Preference(mercadopago);

    // Detalles de la preferencia
    const preferenceDetails = {
      items: carritoDeCompras,
      payer: {
        name: "Juan",
        surname: "Pérez",
        email: "usuario@correo.com",
        phone: {
          area_code: "11",
          number: "4444-4444",
        },
        identification: {
          type: "CPF", // O 'DNI' para Brasil
          number: "19119119100",
        },
        address: {
          street_name: "Calle",
          street_number: 123,
          zip_code: "06233200",
        },
      },
      back_urls: {
      // Local
        success: "http://localhost:3001/payment/success",
       // Deploy
        // success: "https://fake-store-gilt.vercel.app/logueado",

        failure: "http://www.failure.com",
        pending: "http://www.pending.com",
      },
      auto_return: "approved",
      payment_methods: {
        excluded_payment_methods: [],
        excluded_payment_types: [],
        installments: 1,
      },
      notification_url: "https://www.your-site.com/ipn",
      statement_descriptor: "TU_NEGOCIO",
      external_reference: "Reference_1234",
      expires: true,
      expiration_date_from: startDate.toISOString(),
      expiration_date_to: endDate.toISOString(),
    };

    // Crear la preferencia y enviarla como respuesta
    const createdPreference = await preference.create({
      body: preferenceDetails,
    });

    res.status(200).json(createdPreference);
  } catch (error) {
    console.error("Error al crear la preferencia de Mercado Pago:", error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
};

const mercadoPagoHandlerSucces = async (req, res) => {
  const paymentId = req.query.payment_id;
  const status = req.query.status;
  const externalReference = req.query.external_reference;

  // Haz lo que necesites con los datos (almacenar en la base de datos, enviar notificaciones, etc.)
  console.log("ID de pago:", paymentId);
  console.log("Estado del pago:", status);
  console.log("Referencia externa:", externalReference);
  res.status(200).json({ msg: "Ok" });
};
const mercadoPagoHandlerFailure = async (req, res) => {};
const mercadoPagoHandlerPending = async (req, res) => {};

module.exports = {
  mercadoPagoHandlerCheckOut,
  mercadoPagoHandlerSucces,
  mercadoPagoHandlerFailure,
  mercadoPagoHandlerPending,
};
