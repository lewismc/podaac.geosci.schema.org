/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//This JavaScript should be embedded in every PO.DAAC Dataset Landing 
//Page such that it is invoked whenever the page is requested.
//The resulting JSON-LD will be dynamically generated and populated 
//from DMAS Solr content.
//For more information on how this can be done using pure JavaScript see
// https://wiki.apache.org/solr/SolJSON#Using_Solr.27s_JSON_output_for_AJAX

//Example JSON-LD representing a geosci.schema.org's Dataset
//https://github.com/ESIPFed/science-on-schema.org/blob/master/guides/Dataset.md
//...can be seen at
//https://github.com/lewismc/podaac.geosci.schema.org/blob/master/Dataset.jsonld