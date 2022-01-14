/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2021 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/tspence/lockstep-sdk-typescript
 */
export class CodeDefinitionsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the CodeDefinition specified by this unique identifier, optionally including nested data sets.
     *
     * A CodeDefinition contains information around system code values and their definitions.
     *
     * @param id - The unique Lockstep Platform ID number of this CodeDefinition
     * @param include - To fetch additional data on this object, specify the list of elements to retrieve.        No collections are currently available but may be offered in the future
     */
    retrieveCodeDefinition(id, include) {
        const url = `/api/v1/CodeDefinitions/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request('get', url, options, null);
    }
    /**
     * Queries CodeDefinitions for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.  More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * A CodeDefinition contains information around system code values and their definitions.
     *
     * @param filter - The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include - To fetch additional data on this object, specify the list of elements to retrieve.        No collections are currently available but may be offered in the future
     * @param order - The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize - The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber - The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryCodeDefinitions(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/CodeDefinitions/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request('get', url, options, null);
    }
}
//# sourceMappingURL=CodeDefinitionsClient.js.map