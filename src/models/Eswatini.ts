import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * Eswatini (SZ)
 */
export class Eswatini extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "SZ";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "SWZ";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "748";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "WZ";

  /**
   * Telephone country code
   */
  callingCode = "268";

  /**
   * Capital city
   */
  capital = "Mbabane";

  /**
   * Continent
   *
   * AF: Africa
   * AN: Antarctica
   * AS: Asia
   * EU: Europe
   * NA: North America
   * OC: Oceania
   * SA: South America
   */
  continent = Continent.AF;

  /**
   * English name of the country
   */
  en = "Eswatini";

  /**
   * Hungarian name of the country
   */
  hu = "Eswatini";

  /**
   * German name of the country
   */
  de = "Eswatini";

  /**
   * Spanish name of the country
   */
  es = "Esuatini";

  /**
   * Italian name of the country
   */
  it = "Swaziland";

  /**
   * French name of the country
   */
  fr = "Eswatini";

  /**
   * Portuguese name of the country
   */
  pt = "Essuatíni";
}
