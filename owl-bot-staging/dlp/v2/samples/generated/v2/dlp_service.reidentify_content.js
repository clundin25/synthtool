// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START dlp_v2_generated_DlpService_ReidentifyContent_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Parent resource name.
   *  The format of this value varies depending on whether you have specified a
   *  processing
   *  location (https://cloud.google.com/dlp/docs/specifying-location):
   *  + Projects scope, location specified:<br/>
   *    `projects/`<var>PROJECT_ID</var>`/locations/`<var>LOCATION_ID</var>
   *  + Projects scope, no location specified (defaults to global):<br/>
   *    `projects/`<var>PROJECT_ID</var>
   *  The following example `parent` string specifies a parent project with the
   *  identifier `example-project`, and specifies the `europe-west3` location
   *  for processing data:
   *      parent=projects/example-project/locations/europe-west3
   */
  // const parent = 'abc123'
  /**
   *  Configuration for the re-identification of the content item.
   *  This field shares the same proto message type that is used for
   *  de-identification, however its usage here is for the reversal of the
   *  previous de-identification. Re-identification is performed by examining
   *  the transformations used to de-identify the items and executing the
   *  reverse. This requires that only reversible transformations
   *  be provided here. The reversible transformations are:
   *   - `CryptoDeterministicConfig`
   *   - `CryptoReplaceFfxFpeConfig`
   */
  // const reidentifyConfig = {}
  /**
   *  Configuration for the inspector.
   */
  // const inspectConfig = {}
  /**
   *  The item to re-identify. Will be treated as text.
   */
  // const item = {}
  /**
   *  Template to use. Any configuration directly specified in
   *  `inspect_config` will override those set in the template. Singular fields
   *  that are set in this request will replace their corresponding fields in the
   *  template. Repeated fields are appended. Singular sub-messages and groups
   *  are recursively merged.
   */
  // const inspectTemplateName = 'abc123'
  /**
   *  Template to use. References an instance of `DeidentifyTemplate`.
   *  Any configuration directly specified in `reidentify_config` or
   *  `inspect_config` will override those set in the template. The
   *  `DeidentifyTemplate` used must include only reversible transformations.
   *  Singular fields that are set in this request will replace their
   *  corresponding fields in the template. Repeated fields are appended.
   *  Singular sub-messages and groups are recursively merged.
   */
  // const reidentifyTemplateName = 'abc123'

  // Imports the Dlp library
  const {DlpServiceClient} = require('@google-cloud/dlp').v2;

  // Instantiates a client
  const dlpClient = new DlpServiceClient();

  async function callReidentifyContent() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await dlpClient.reidentifyContent(request);
    console.log(response);
  }

  callReidentifyContent();
  // [END dlp_v2_generated_DlpService_ReidentifyContent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
