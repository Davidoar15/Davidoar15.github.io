export default function validateForm(
    full_name: string,
    phone_number: string,
    preferred_language: string,
    how_found: string
) {
    let errors = {};

    if (!full_name) {
        errors.full_name = "El Nombre es requerido";
    } else if (full_name.length < 3) {
        errors.full_name = "Este Nombre es muy corto (min. 3 caracteres)";
    } else if (full_name.length > 45) {
        errors.full_name = "Este Nombre es muy largo (max. 45 caracteres)";
    };

    if (
        !phone_number ||
        typeof phone_number !== "string" ||
        phone_number.length < 7 ||
        phone_number.length > 15
      ) {
        errors.phone_number = "Número de Teléfono debe tener entre 7 y 15 dígitos";
      }

    if (!preferred_language) {
        errors.preferred_language = "Este Campo es requerido";
    }

    if (!how_found) {
        errors.how_found = "Este Campo es requerido";
    }

    return errors
}