# .DefaultApi

All URIs are relative to *https://api.organizze.com.br/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccount**](DefaultApi.md#createAccount) | **POST** /accounts | Create bank account
[**createCategory**](DefaultApi.md#createCategory) | **POST** /categories | Create category
[**createCreditCard**](DefaultApi.md#createCreditCard) | **POST** /credit_cards | Create a new credit card
[**createTransaction**](DefaultApi.md#createTransaction) | **POST** /transactions | Create transaction
[**deleteAccount**](DefaultApi.md#deleteAccount) | **DELETE** /accounts/{accountId} | Delete bank account
[**deleteCategory**](DefaultApi.md#deleteCategory) | **DELETE** /categories/{categoryId} | Delete category
[**deleteCreditCard**](DefaultApi.md#deleteCreditCard) | **DELETE** /credit_cards/{creditCardId} | Delete credit card
[**deleteTransaction**](DefaultApi.md#deleteTransaction) | **DELETE** /transactions/{transactionId} | Delete transaction
[**getAccount**](DefaultApi.md#getAccount) | **GET** /accounts/{accountId} | Get bank account details
[**getAccounts**](DefaultApi.md#getAccounts) | **GET** /accounts | List bank accounts
[**getBudgetsByYear**](DefaultApi.md#getBudgetsByYear) | **GET** /budgets/{year} | List budgets for the specified year
[**getBudgetsByYearAndMonth**](DefaultApi.md#getBudgetsByYearAndMonth) | **GET** /budgets/{year}/{month} | List budgets for the specified year and month
[**getCategories**](DefaultApi.md#getCategories) | **GET** /categories | List categories
[**getCategory**](DefaultApi.md#getCategory) | **GET** /categories/{categoryId} | Get category details
[**getCreditCard**](DefaultApi.md#getCreditCard) | **GET** /credit_cards/{creditCardId} | Get credit card details
[**getCreditCardInvoice**](DefaultApi.md#getCreditCardInvoice) | **GET** /credit_cards/{creditCardId}/invoices/{invoiceId} | Get details of a credit card invoice
[**getCreditCardInvoicePayments**](DefaultApi.md#getCreditCardInvoicePayments) | **GET** /credit_cards/{creditCardId}/invoices/{invoiceId}/payments | List payments for a credit card invoice
[**getCreditCardInvoiceTransactions**](DefaultApi.md#getCreditCardInvoiceTransactions) | **GET** /credit_cards/{creditCardId}/invoices/{invoiceId}/transactions | List transactions for a credit card invoice
[**getCreditCardInvoices**](DefaultApi.md#getCreditCardInvoices) | **GET** /credit_cards/{creditCardId}/invoices | List invoices for a credit card
[**getCreditCards**](DefaultApi.md#getCreditCards) | **GET** /credit_cards | List credit cards
[**getTransaction**](DefaultApi.md#getTransaction) | **GET** /transactions/{transactionId} | Get transaction details
[**getTransactions**](DefaultApi.md#getTransactions) | **GET** /transactions | List transactions
[**getUser**](DefaultApi.md#getUser) | **GET** /users/{userId} | Get user details
[**updateAccount**](DefaultApi.md#updateAccount) | **PUT** /accounts/{accountId} | Update bank account
[**updateCategory**](DefaultApi.md#updateCategory) | **PUT** /categories/{categoryId} | Update category
[**updateCreditCard**](DefaultApi.md#updateCreditCard) | **PUT** /credit_cards/{creditCardId} | Update credit card details
[**updateTransaction**](DefaultApi.md#updateTransaction) | **PUT** /transactions/{transactionId} | Update transaction


# **createAccount**
> Account createAccount(account)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateAccountRequest = {
  // Account
  account: {
    id: 1,
    name: "name_example",
    description: "description_example",
    archived: true,
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    _default: true,
    type: "type_example",
  },
};

apiInstance.createAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **Account**|  |


### Return type

**Account**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Account created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCategory**
> Category createCategory(category)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateCategoryRequest = {
  // Category
  category: {
    id: 1,
    name: "name_example",
    description: "description_example",
    parentId: 1,
    recurring: true,
  },
};

apiInstance.createCategory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **Category**|  |


### Return type

**Category**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Category created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCreditCard**
> CreditCard createCreditCard(creditCard)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateCreditCardRequest = {
  // CreditCard
  creditCard: {
    id: 1,
    name: "name_example",
    description: "description_example",
    cardNetwork: "cardNetwork_example",
    closingDay: 1,
    dueDay: 1,
    limitCents: 1,
    kind: "kind_example",
    archived: true,
    _default: true,
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.createCreditCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditCard** | **CreditCard**|  |


### Return type

**CreditCard**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Credit card created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTransaction**
> Transaction createTransaction(transaction)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateTransactionRequest = {
  // Transaction
  transaction: {
    id: 1,
    description: "description_example",
    date: new Date('1970-01-01').toISOString().split('T')[0];,
    paid: true,
    amountCents: -2147483647,
    totalInstallments: 1,
    recurring: true,
    accountId: 1,
    categoryId: 1,
    notes: "notes_example",
    attachmentsCount: 0,
    creditCardId: 1,
    creditCardInvoiceId: 1,
    paidCreditCardId: 1,
    paidCreditCardInvoiceId: 1,
    opositeTransactionId: 1,
    opositeAccountId: 1,
    tags: [
      "tags_example",
    ],
    attachments: [
      "attachments_example",
    ],
  },
};

apiInstance.createTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction** | **Transaction**|  |


### Return type

**Transaction**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Transaction created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAccount**
> void deleteAccount()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteAccountRequest = {
  // number | Account ID
  accountId: 1,
};

apiInstance.deleteAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**number**] | Account ID | defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Account deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCategory**
> void deleteCategory()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteCategoryRequest = {
  // number | Category ID
  categoryId: 1,
};

apiInstance.deleteCategory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**number**] | Category ID | defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Category deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCreditCard**
> void deleteCreditCard()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteCreditCardRequest = {
  // number | Credit card ID
  creditCardId: 1,
};

apiInstance.deleteCreditCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditCardId** | [**number**] | Credit card ID | defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Credit card deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTransaction**
> void deleteTransaction()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteTransactionRequest = {
  // number | Transaction ID
  transactionId: 1,
};

apiInstance.deleteTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | [**number**] | Transaction ID | defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Transaction deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccount**
> Account getAccount()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAccountRequest = {
  // number | Account ID
  accountId: 1,
};

apiInstance.getAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**number**] | Account ID | defaults to undefined


### Return type

**Account**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccounts**
> Array<Account> getAccounts()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getAccounts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Account>**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBudgetsByYear**
> Array<Budget> getBudgetsByYear()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetBudgetsByYearRequest = {
  // number | Year for budgets
  year: 1,
};

apiInstance.getBudgetsByYear(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | [**number**] | Year for budgets | defaults to undefined


### Return type

**Array<Budget>**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBudgetsByYearAndMonth**
> Array<Budget> getBudgetsByYearAndMonth()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetBudgetsByYearAndMonthRequest = {
  // number | Year for budgets
  year: 1,
  // number | Month for budgets
  month: 1,
};

apiInstance.getBudgetsByYearAndMonth(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | [**number**] | Year for budgets | defaults to undefined
 **month** | [**number**] | Month for budgets | defaults to undefined


### Return type

**Array<Budget>**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategories**
> Array<Category> getCategories()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getCategories(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Category>**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategory**
> Category getCategory()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetCategoryRequest = {
  // number | Category ID
  categoryId: 1,
};

apiInstance.getCategory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**number**] | Category ID | defaults to undefined


### Return type

**Category**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCreditCard**
> CreditCard getCreditCard()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetCreditCardRequest = {
  // number | Credit card ID
  creditCardId: 1,
};

apiInstance.getCreditCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditCardId** | [**number**] | Credit card ID | defaults to undefined


### Return type

**CreditCard**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCreditCardInvoice**
> Invoice getCreditCardInvoice()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetCreditCardInvoiceRequest = {
  // number | Credit card ID
  creditCardId: 1,
  // number | Invoice ID
  invoiceId: 1,
};

apiInstance.getCreditCardInvoice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditCardId** | [**number**] | Credit card ID | defaults to undefined
 **invoiceId** | [**number**] | Invoice ID | defaults to undefined


### Return type

**Invoice**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCreditCardInvoicePayments**
> PaymentDetails getCreditCardInvoicePayments()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetCreditCardInvoicePaymentsRequest = {
  // number | Credit card ID
  creditCardId: 1,
  // number | Invoice ID
  invoiceId: 1,
};

apiInstance.getCreditCardInvoicePayments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditCardId** | [**number**] | Credit card ID | defaults to undefined
 **invoiceId** | [**number**] | Invoice ID | defaults to undefined


### Return type

**PaymentDetails**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCreditCardInvoiceTransactions**
> Array<TransactionDetails> getCreditCardInvoiceTransactions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetCreditCardInvoiceTransactionsRequest = {
  // number | Credit card ID
  creditCardId: 1,
  // number | Invoice ID
  invoiceId: 1,
};

apiInstance.getCreditCardInvoiceTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditCardId** | [**number**] | Credit card ID | defaults to undefined
 **invoiceId** | [**number**] | Invoice ID | defaults to undefined


### Return type

**Array<TransactionDetails>**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCreditCardInvoices**
> Array<Invoice> getCreditCardInvoices()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetCreditCardInvoicesRequest = {
  // number | Credit card ID
  creditCardId: 1,
};

apiInstance.getCreditCardInvoices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditCardId** | [**number**] | Credit card ID | defaults to undefined


### Return type

**Array<Invoice>**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCreditCards**
> Array<CreditCard> getCreditCards()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getCreditCards(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<CreditCard>**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransaction**
> Transaction getTransaction()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetTransactionRequest = {
  // number | Transaction ID
  transactionId: 1,
};

apiInstance.getTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | [**number**] | Transaction ID | defaults to undefined


### Return type

**Transaction**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransactions**
> Array<Transaction> getTransactions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetTransactionsRequest = {
  // number | Account ID (optional)
  accountId: 1,
  // string | Start date (format: YYYY-MM-DD) (optional)
  startDate: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | End date (format: YYYY-MM-DD) (optional)
  endDate: new Date('1970-01-01').toISOString().split('T')[0];,
};

apiInstance.getTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**number**] | Account ID | (optional) defaults to undefined
 **startDate** | [**string**] | Start date (format: YYYY-MM-DD) | (optional) defaults to undefined
 **endDate** | [**string**] | End date (format: YYYY-MM-DD) | (optional) defaults to undefined


### Return type

**Array<Transaction>**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUser**
> User getUser()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetUserRequest = {
  // number | User ID
  userId: 1,
};

apiInstance.getUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] | User ID | defaults to undefined


### Return type

**User**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAccount**
> Account updateAccount(account)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateAccountRequest = {
  // number | Account ID
  accountId: 1,
  // Account
  account: {
    id: 1,
    name: "name_example",
    description: "description_example",
    archived: true,
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    _default: true,
    type: "type_example",
  },
};

apiInstance.updateAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **Account**|  |
 **accountId** | [**number**] | Account ID | defaults to undefined


### Return type

**Account**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Account updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCategory**
> Category updateCategory(category)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateCategoryRequest = {
  // number | Category ID
  categoryId: 1,
  // Category
  category: {
    id: 1,
    name: "name_example",
    description: "description_example",
    parentId: 1,
    recurring: true,
  },
};

apiInstance.updateCategory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **Category**|  |
 **categoryId** | [**number**] | Category ID | defaults to undefined


### Return type

**Category**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Category updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCreditCard**
> CreditCard updateCreditCard(creditCard)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateCreditCardRequest = {
  // number | Credit card ID
  creditCardId: 1,
  // CreditCard
  creditCard: {
    id: 1,
    name: "name_example",
    description: "description_example",
    cardNetwork: "cardNetwork_example",
    closingDay: 1,
    dueDay: 1,
    limitCents: 1,
    kind: "kind_example",
    archived: true,
    _default: true,
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.updateCreditCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditCard** | **CreditCard**|  |
 **creditCardId** | [**number**] | Credit card ID | defaults to undefined


### Return type

**CreditCard**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Credit card updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTransaction**
> Transaction updateTransaction(transaction)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateTransactionRequest = {
  // number | Transaction ID
  transactionId: 1,
  // Transaction
  transaction: {
    id: 1,
    description: "description_example",
    date: new Date('1970-01-01').toISOString().split('T')[0];,
    paid: true,
    amountCents: -2147483647,
    totalInstallments: 1,
    recurring: true,
    accountId: 1,
    categoryId: 1,
    notes: "notes_example",
    attachmentsCount: 0,
    creditCardId: 1,
    creditCardInvoiceId: 1,
    paidCreditCardId: 1,
    paidCreditCardInvoiceId: 1,
    opositeTransactionId: 1,
    opositeAccountId: 1,
    tags: [
      "tags_example",
    ],
    attachments: [
      "attachments_example",
    ],
  },
};

apiInstance.updateTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction** | **Transaction**|  |
 **transactionId** | [**number**] | Transaction ID | defaults to undefined


### Return type

**Transaction**

### Authorization

[basicAuth](README.md#basicAuth), [userAgent](README.md#userAgent)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transaction updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


