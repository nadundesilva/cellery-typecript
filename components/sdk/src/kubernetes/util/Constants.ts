/*
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Kubernetes related constants.
 */
class Constants {
    public static readonly CELL_RESOURCE_API_VERSION = "mesh.cellery.io/v1alpha1";
    public static readonly CELL_RESOURCE_KIND = "Cell";
    public static readonly CELL_RESOURCE_ANNOTATION_IMAGE_ORG = "mesh.cellery.io/cell-image-org";
    public static readonly CELL_RESOURCE_ANNOTATION_IMAGE_NAME = "mesh.cellery.io/cell-image-name";
    public static readonly CELL_RESOURCE_ANNOTATION_IMAGE_VERSIOn = "mesh.cellery.io/cell-image-version";
}

export default Constants;
