/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/stations": {
    post: operations["create_station_stations_post"];
  };
}

export interface components {
  schemas: {
    /** CreateStation */
    CreateStation: {
      /** Name */
      name: string;
      /** Comment */
      comment?: string;
    };
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components["schemas"]["ValidationError"][];
    };
    /** Station */
    Station: {
      /** Id */
      id: number;
      /** Name */
      name?: string;
      /** Comment */
      comment?: string;
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
      /**
       * Updated At
       * Format: date-time
       */
      updated_at?: string;
      /** Api Key */
      api_key: string;
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: string[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
  };
}

export interface operations {
  create_station_stations_post: {
    parameters: {
      header: {
        "user-jwt"?: string;
      };
    };
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["Station"];
        };
      };
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateStation"];
      };
    };
  };
}

export interface external {}
