<div align="center">
	<h1>Organizze SDK</h1>
	<p>
		<b>An unofficial OpenAPI client for the Organizze API</b>
	</p>
	<br>
</div>

# Organizze SDK

Organizze SDK is an unofficial OpenAPI client for Organizze API generated using [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator). 
<br>
<br>
[Organizze](https://www.organizze.com.br/) is a personal finance application that helps individuals manage their financial life, the SDK was generated based on the information provided in the [Organizze API documentation](https://github.com/organizze/api-doc).
## Installation

```
npm install organizze-sdk
```

## Usage

First set up the Authentication, then proceed to make API requests.

```ts
import { AuthMethodsConfiguration, Configuration, DefaultApi, createConfiguration } from "organizze-sdk"

// Auth Configuration
const authConfig: AuthMethodsConfiguration = {
    "basicAuth": {
        "username": process.env.ORGANIZZE_USERNAME,
        "password": process.env.ORGANIZZE_PASSWORD
    },
    "userAgent": process.env.ORGANIZZE_USER_AGENT
}
    
const config: Configuration = createConfiguration({authMethods: authConfig})

// Initialize API Client
const api = new DefaultApi(config);

// Make any request you want
const resp = await api.getAccounts();
console.log(resp);
```
## Contributing

Any improvements and fixes are welcome! Submit a Pull request if you want to collaborate with this project.
