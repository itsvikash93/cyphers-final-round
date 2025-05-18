export const vertex = `
  // Vertex Shader
varying vec2 vUv;
uniform vec2 uDelta;
uniform float uTime;

void main() {
  vUv = uv;
  vec3 newPosition = position;
  
  // Apply mouse movement effect
  newPosition.x += sin(uv.y * 3.141592653589793) * uDelta.x * 0.2;
  newPosition.y += cos(uv.x * 3.141592653589793) * uDelta.y * 0.2;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;

export const fragment = `
 // Fragment Shader
varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uAlpha;
uniform float uTime;

void main() {
  vec2 uv = vUv;
  
  // Add subtle animation
  uv.x += sin(uv.y * 10.0 + uTime) * 0.005;
  uv.y += cos(uv.x * 10.0 + uTime) * 0.005;
  
  vec4 texture = texture2D(uTexture, uv);
  texture.a *= uAlpha; // Apply opacity
  gl_FragColor = texture;
}
`;
